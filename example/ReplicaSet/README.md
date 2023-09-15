# ReplicaSet

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
Make sure you are inside ReplicaSet folder
```bash
cd ./example/ReplicaSet
```
Create ReplicaSet
```bash
kubectl create -f ./example/01-ReplicaSet.yaml
```
OR
```bash
kubectl apply -f ./example/01-ReplicaSet.yaml
```
Get ReplicaSet status
```bash
kubectl get replicaset
```
Get Pod Status, there will be 3 pods running
```bash
kubectl get pods
```
Delete ReplicaSet
```bash
kubectl delete -f ./example/01-ReplicaSet.yaml
```
Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```

---

Replication Controller is older way
ReplicaSet is newer way


---
command
kubectl scale rs <replica-set-name> --replicas=5

---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (Pods)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Pods)
* [Next Topic (Deployment)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Deployment)
