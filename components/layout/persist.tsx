import React, { ReactNode, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useRefreshToken from "../../hooks/useRefreshToken";

function UserWrapper({ children }: { children: ReactNode }) {
  const { auth, rememberMe } = useAuth();

  const { user, getUser } = useUser();

  const refresh = useRefreshToken();

  useEffect(() => {
    var isMounted = true;

    if (rememberMe) {
      const verifyRefreshToken = async () => {
        try {
          await refresh();

          if (!user) {
            await getUser();
          }
        } catch (err) {
          console.log(err);
        }
      };

      if (!auth.accessToken && isMounted) {
        verifyRefreshToken();
      }
    }

    return () => {
      isMounted = false;
    };
  }, [auth.accessToken, getUser, user, rememberMe, refresh]);

  return <>{children}</>;
}

export default React.memo(UserWrapper);
