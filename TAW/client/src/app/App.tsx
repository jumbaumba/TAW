import { useEffect, useState } from 'react';
import { LoginPage } from "@pages/login/ui/LoginPage";

interface DataResponse {
  message: string;
}

export const App = ()  => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data: DataResponse) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Backend Response: {data}</h1>
      <LoginPage />
    </div>
  );
}
