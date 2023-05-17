import React, { ReactNode, useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useRefreshToken from "../../hooks/useRefreshToken";

function UserWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  const { auth, rememberMe } = useAuth();

  const { user, getUser } = useUser();

  const refresh = useRefreshToken();

  useEffect(() => {
    console.log("persist file run");
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
        } finally {
          isMounted && setLoading(false);
        }
      };

      if (!auth.accessToken && rememberMe && isMounted) {
        verifyRefreshToken();

        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [auth.accessToken, getUser, user, rememberMe, refresh]);

  return <>{loading ? <div className="loading-navbar" /> : children}</>;
}

export default React.memo(UserWrapper);
