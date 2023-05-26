# Pods

### Pre Requisites
* Make sure you have minikube installed
---
### Example
Start minikube cluster with 2 worker nodes
```bash
minikube start --nodes 3 -p k8s
```
Check cluster status
```bash
minikube status -p k8s
```
Make sure you are inside Pods folder
```bash
cd ./example/Pods
```
Create a Pod
```bash
kubectl create -f ./example/01-Pods.yaml 
```
OR
```bash
kubectl apply -f ./example/01-Pods.yaml 
```
Check Pod status
```bash
kubectl get pods
```
Get Pod detail
```bash
kubectl describe pods app-frontend-pod
```
Kubectl port forward 
```bash
kubectl port-forward  app-frontend-pod 3000:3000
```
Check the website in the browser
[Frontend App](http://localhost:3000/)

Get Pod logs
```bash
kubectl logs app-frontend-pod
```
Delete Pod
```bash
kubectl delete -f ./example/01-Pods.yaml 
```
Delete cluster (Optional) 
```bash
minikube delete -p k8s
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (K8S Architecture)](https://github.com/vimalmenon/k8s-learn/tree/master/example/K8S%20Architecture)
* [Next Topic (ReplicaSet)](https://github.com/vimalmenon/k8s-learn/tree/master/example/ReplicaSet)
