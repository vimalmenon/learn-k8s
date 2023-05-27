# DaemonSet

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding on deploying a Pod, ReplicaSet and Deployment


---
### Example

Make sure you are inside DaemonSet folder
Start minikube cluster with 2 worker nodes (Optional) 
```bash
minikube start --nodes 3 -p k8s
```
Check cluster status (Optional) 
```bash
minikube status -p k8s
```
Make sure you are inside DaemonSet folder
```bash
cd ./example/DaemonSet
```
Create DaemonSet
```bash
kubectl create -f ./example/01-DaemonSet.yaml
```
OR
```bash
kubectl apply -f ./example/01-DaemonSet.yaml
```
Get DaemonSet status
```bash
kubectl get daemonset
```
Get Pod status
```bash
kubectl get pod -o wide
```
Get nodes status
```bash
kubectl get nodes -o wide
```
Delete DaemonSet
```bash
kubectl delete -f ./example/01-DaemonSet.yaml
```
Delete cluster / Clean Up (Optional) 
```bash
minikube delete -p k8s
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (Deployment)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Deployment)
* [Next Topic (Namespace)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Namespace)

