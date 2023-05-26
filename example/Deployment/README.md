# Deployment

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding on deploying a Pod and ReplicaSet

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
Make sure you are inside Deployment folder
```bash
cd ./example/Deployment
```
Create Deployment
```bash
kubectl create -f ./example/01-Deployment.yaml
```
OR
```bash
kubectl apply -f ./example/01-Deployment.yaml
```
Get Deployment status
```bash
kubectl get deployment
```
Get ReplicaSet status
```bash
kubectl get replicaset
```
Get Pod Status, there will be 3 pods running
```bash
kubectl get pods
```
Delete deployment
```bash
kubectl delete -f ./example/01-Deployment.yaml
```
Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```

---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (ReplicaSet)](https://github.com/vimalmenon/k8s-learn/tree/master/example/ReplicaSet)
* [Next Topic (DaemonSet)](https://github.com/vimalmenon/k8s-learn/tree/master/example/DaemonSet)
