import App from "../src/Page/App";

export default function Home() {
  console.log(process.env.myRuntimeEnvVar)
  return (
    <section>
      This is Home Page {process.env.NEXT_PUBLIC_APP_NAME}<App value={process.env.CUSTOM_VALUE}/>
    </section>
  );
}
