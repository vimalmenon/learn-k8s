# Resources

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding of deploying a Pod

---
### Example
Start minikube cluster with 1 worker nodes (Optional) 
```bash
minikube start --memory 3000 --nodes 2 -p k8s
```
Check cluster status (Optional) 
```bash
minikube status -p k8s
```
Make sure you are inside Job folder
```bash
cd ./example/Resources
```

Create Namespace and Pod
```bash
kubectl create -f ./example/01-Namespace.yaml
kubectl create -f ./example/02-Pod.yaml
```
```bash
kubectl get pods -n k8s-app   
```
As you could see Pods are not getting assigned
```bash
kubectl delete -f ./example/02-Pod.yaml
```
```bash
kubectl create -f ./example/03-Pod.yaml
```

Quality of Service


---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (Secret)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Secret)
* [Next Topic (Resources)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Resources)