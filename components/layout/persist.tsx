import React, { ReactNode, useEffect, useState } from "react";

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
          // ! await refresh();
          // * ***********
          setAuth({
            accessToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzAsInBob25lTnVtYmVyIjoiMDk5MDg2NzAyNzQiLCJlbWFpbCI6InZ0aW9AZ21haWwuY29tIiwiaWF0IjoxNjgyMjM4OTc1LCJleHAiOjE2ODIzMjUzNzV9.hn1b-bOG4kyIL9ZY2BPwzVBLC_UG5D-O_eE0-PjLnjY",
          });
          // * ***********

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
