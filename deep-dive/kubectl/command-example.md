## Imperative command

#### Create Pod
```sh
kubectl run pod-test -n test --image=nginx --dry-run client -o yaml
```