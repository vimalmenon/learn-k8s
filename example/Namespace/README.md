# DaemonSet

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding on deploying a Pod, ReplicaSet and Deployment
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
Make sure you are inside Namespace folder
```bash
cd ./example/Namespace
```
List all the Namespace
```bash
kubectl get namespace
```
Create a Namespace
```bash
kubectl create -f ./example/01-Namespace.yaml
```
List all the Namespace, you will be able to see k8s-app namespace
```bash
kubectl get namespace
```
Create a Pod under namespace
```bash
kubectl create -f ./example/02-Pod.yaml 
```
List pods, This wouldn't display anything as it's looking default namespace
```bash
kubectl get pods 
```
List pod under a namespace
```bash
kubectl get pods -n k8s-app
```
Delete pod
```bash
kubectl delete -f ./example/02-Pod.yaml
```
Delete namespaces
```bash
kubectl delete -f ./example/01-Namespace.yaml
```
Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (DaemonSet)](https://github.com/vimalmenon/k8s-learn/tree/master/example/DaemonSet)
* [Next Topic (Job)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Job)

