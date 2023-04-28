import React, { ReactNode, useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useRefreshToken from "../../hooks/useRefreshToken";

function UserWrapper({ children }: { children: ReactNode }) {
  const { auth, rememberMe, setAuth } = useAuth();

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

      if (!auth.accessToken && rememberMe && isMounted) {
        verifyRefreshToken();
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{children}</>;
}

export default React.memo(UserWrapper);
