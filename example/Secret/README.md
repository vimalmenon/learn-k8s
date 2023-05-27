# Secret

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

Make sure you are inside Secret folder
```bash
cd ./example/Secret
```
Create Namespace, Secret and Pod
```bash
kubectl create -f ./example/01-Namespace.yaml
kubectl create -f ./example/02-Secret.yaml
kubectl create -f ./example/03-Pod.yaml
```
Kubectl get pods
```bash
kubectl get pods
```
Kubectl port forward 
```bash
kubectl port-forward  app-frontend-pod 3000:3000
```
Check the website in the browser
[Frontend App](http://localhost:3000/)

Delete Namespace, Secret and Pod
```bash
kubectl delete -f ./example/03-Pod.yaml
kubectl delete -f ./example/02-Secret.yaml
kubectl delete -f ./example/01-Namespace.yaml
```
Create Namespace, Secret and Pod
```bash
kubectl create -f ./example/01-Namespace.yaml
kubectl create -f ./example/04-Secret.yaml
kubectl create -f ./example/03-Pod.yaml
```
Check the website in the browser
[Frontend App](http://localhost:3000/)

Delete Namespace, Secret and Pod
```bash
kubectl delete -f ./example/03-Pod.yaml
kubectl delete -f ./example/04-Secret.yaml
kubectl delete -f ./example/01-Namespace.yaml
```
Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```

---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (ConfigMap)](https://github.com/vimalmenon/k8s-learn/tree/master/example/ConfigMap)
* [Next Topic (Deployment)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Deployment)
