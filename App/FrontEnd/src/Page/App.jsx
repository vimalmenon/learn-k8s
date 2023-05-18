export default function App(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>App Name</td>
          <td>{props.appName}</td>
        </tr>
        <tr>
          <td>Node Name</td>
          <td>{props.nodeName}</td>
        </tr>
        <tr>
          <td>Pod Name</td>
          <td>{props.podName}</td>
        </tr>
        <tr>
          <td>POD NAMESPACE</td>
          <td>{props.podNamespace}</td>
        </tr>
        <tr>
          <td>POD IP</td>
          <td>{props.podIp}</td>
        </tr>
        <tr>
          <td>Env</td>
          <td>{props.env}</td>
        </tr>
      </tbody>
    </table>
  );
}
