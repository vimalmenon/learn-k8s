## Helm

### List Repo
```sh
helm repo list
```
---
### List package installed
```sh
helm list
helm list -a
```

### Show default values for repo
```sh
helm show values <full-repo-name>
```

---
#### Add Repo and update
```sh
helm repo add <repo-name> <repo-url>
```
```sh
helm repo update
```
----
### Install and Uninstall a chart
Install
```sh
helm install <name> <repo-name>/<package>
```
Uninstall
```sh
helm uninstall <name>
```
----
#### Overwrite the value
```sh
helm install <name> <repo-name>/<package> --set <property>
```

---
#### Update the value after installation
```sh
helm upgrade <name> <repo-name>/<package> --set <property>=<value>
```
```sh
helm upgrade <name> <repo-name>/<package> --values=<value-file.yml>
```
---

#### Pull the repository
```sh
helm pull <repo-name>/<package> --untar=true
```

#### Make yaml file
```sh
helm template <name> <repo-name>/<package> --values=<value-file.yml>
```
#### helm create chart
```sh
helm create <chart-name> 
```
#### Makes yaml file from created chart
```sh
helm template .
```
#### Install a repo
```sh
helm install <name> <directory-name>
```
#### Check if the template is valid
```sh
helm install <name>  --dry-run --debug  <directory-name>
```
#### Link to helm package
https://artifacthub.io/
