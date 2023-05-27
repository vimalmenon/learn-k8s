# Job

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
Make sure you are inside Job folder
```bash
cd ./example/Job
```
Create a Namespace
```bash
kubectl create -f ./example/01-Namespace.yaml
```
Create a Job under namespace
```bash
kubectl create -f ./example/02-Job.yaml 
```
List Jobs
```bash
kubectl get jobs -n k8s-app
```

Get pods
```bash
kubectl get pods -n k8s-app
```
Check Logs on the pod
```bash
kubectl logs <pod-name> -n k8s-app
```

Delete Jobs & Namespace
```bash
kubectl delete -f ./example
```

Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```

---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (Namespace)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Namespace)
* [Next Topic (CronJob)](https://github.com/vimalmenon/k8s-learn/tree/master/example/CronJob)
