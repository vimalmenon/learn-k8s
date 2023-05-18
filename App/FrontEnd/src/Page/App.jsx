export default function App(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Column</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>App Name</td>
          <td>{props.appName || "None"}</td>
        </tr>
        <tr>
          <td>Node Name</td>
          <td>{props.nodeName || "None"}</td>
        </tr>
        <tr>
          <td>Pod Name</td>
          <td>{props.podName || "None"}</td>
        </tr>
        <tr>
          <td>POD NAMESPACE</td>
          <td>{props.podNamespace || "None"}</td>
        </tr>
        <tr>
          <td>POD IP</td>
          <td>{props.podIp || "None"}</td>
        </tr>
        <tr>
          <td>Env</td>
          <td>{props.env || "None"}</td>
        </tr>
      </tbody>
    </table>
  );
}
