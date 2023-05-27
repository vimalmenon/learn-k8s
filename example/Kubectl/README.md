# Kubectl

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
Get all the API resources
```bash
kubectl api-resources
```
Get all k8s object
```bash
kubectl get all
``` 

Get all k8s object from --all-namespaces
```bash
kubectl get all --all-namespaces
``` 
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (ConfigMap)](https://github.com/vimalmenon/k8s-learn/tree/master/example/ConfigMap)
* [Next Topic (Deployment)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Deployment)
