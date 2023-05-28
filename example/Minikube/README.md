# Minikube

* Install Minikube using brew or any other package manager
* Link to install page of [Minikube](https://minikube.sigs.k8s.io/docs/start/)

---
### Steps
Check Minikube version
```bash
minikube version
```
List Minikube profile
```bash
minikube profile list
```
Start Minikube with &lt;number&gt; number of nodes and a profile &lt;profile&gt;
```bash
minikube start --nodes <number> -p <profile>
```
Minikube check status for a profile &lt;profile&gt;
```bash
minikube status -p <profile>
```
Stop Minikube with the profile &lt;profile&gt;
```bash
minikube stop -p <profile>
```
Delete Minikube profile &lt;profile&gt;
```bash
minikube delete -p <profile>
```
Show the dashboard with Url
```bash
minikube dashboard --url
```
Switch to specific profile &lt;profile&gt;
```bash
minikube profile -p <profile>
```
Minikube delete all
```bash
minikube delete --all
```
Minikube list addons
```bash
minikube addons list
```
Minikube start with Memory and CPU's
```bash
minikube start --memory 8000 --cpus 3 -p <profile>
```
Add worker node
```bash
minikube node add --worker -p <profile>
```
Delete worker node
```bash
minikube node delete <node-name> -p <profile>
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (K8S Architecture)](https://github.com/vimalmenon/k8s-learn/tree/master/example/K8S%20Architecture)
* [Next Topic (Kubectl)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Kubectl)


