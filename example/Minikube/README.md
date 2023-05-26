# Minikube

* Install Minikube using brew or any other package manager
* Link to install page of [Minikube](https://minikube.sigs.k8s.io/docs/start/)

---
##### Once the minikube is installed

Check Minikube version
```bash
minikube version
```
Check Minikube profile
```bash
minikube profile list
```
Start Minikube with <number> number of nodes and a profile <profile>
```bash
minikube start --nodes <number> -p <profile>
```
Stop Minikube with the Profile <profile>
```bash
minikube stop -p <profile>
```
Delete Minikube with the Profile <profile>
```bash
minikube dlete -p <profile>
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (K8S Architecture)](https://github.com/vimalmenon/k8s-learn/tree/master/example/K8S%20Architecture)
* [Next Topic (Pods)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Pods)
