## Helm



### List Repo
```sh
helm repo list
```
---
### List package installed
```sh
helm list
```

---
#### Add Repo
```sh
helm repo add <repo-name> <repo-url>

---
```
### Install and Uninstall a chart
Install
```sh
helm install <name> <repo-name>/<package>
```
Uninstall
```sh
helm uninstall <name>
```

---
#### Link to helm package
https://artifacthub.io/