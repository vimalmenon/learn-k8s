## Imperative command

#### Create Pod
```sh
kubectl run pod-test -n test --image=nginx --dry-run client -o yaml
```
----
#### Edit Pod
```sh
kubectl edit pod pod-test
```
```sh
kubectl expose deployment <deployment-name> -n <namespace> --port 4000 --type NodePort --dry-run client -o yaml
```