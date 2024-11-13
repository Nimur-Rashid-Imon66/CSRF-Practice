import { useEffect, useState } from "react";
import clientApi from "./utils/axios/clitent";
import FormSubmission from "./Components/FormSubmission";

// let csrfToken = '';
function App() {
  const [csrfToken, setCsrfToken] = useState("");
  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await clientApi.get("/csrf-token", {
          withCredentials: true,
        });
        console.log("🚀 ~ fetchCsrfToken ~ response:", response.data.csrfToken)
        
        setCsrfToken(response.data.csrfToken);
        // csrfToken = response.data.csrfToken;
        // window.csrfTokenGlobal = csrfToken;

        // const res = await  clientApi.get('/say-hello');
        // console.log(res);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }
    fetchCsrfToken();
  }, []);

  if (csrfToken) return <FormSubmission csrfToken={csrfToken} />;
  return <p>Loading...</p>;
}
export default App;
