# ConfigMap

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding of deploying a Pod

---
### Example
Start minikube cluster with 2 worker nodes (Optional) 
```bash
minikube start --nodes 3 -p k8s
```
Check cluster status (Optional) 
```bash
minikube status -p k8s
```
Make sure you are inside ConfigMap folder
```bash
cd ./example/ConfigMap
```
Create Namespace, ConfigMap and Values from Pod
```bash
kubectl create -f ./example/01-Namespace.yaml
kubectl create -f ./example/02-ConfigMap.yaml
kubectl create -f ./example/03-Pod.yaml
```
List pod
```bash
kubectl get pods -n k8s-app
```
Port Forward to check the application
```bash
kubectl port-forward app-frontend-pod 3000:3000
```
Check the website in the browser
[Frontend App](http://localhost:3000/)

---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (CronJob)](https://github.com/vimalmenon/k8s-learn/tree/master/example/CronJob)
* [Next Topic (Secret)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Secret)
