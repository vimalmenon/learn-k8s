# ConfigMap

### Pre Requisites
* Make sure you have minikube installed
* You should have understanding of deploying a Pod

---
### Example
#### Passing values in Yaml file
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
Create Namespace, ConfigMap and Pod
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
Check ConfigMap values
```bash
kubectl describe configmap app-data
```
Check the website in the browser
[Frontend App](http://localhost:3000/)


Delete Pod, ConfigMap and Namespace
```bash
kubectl delete -f ./example/03-Pod.yaml
kubectl delete -f ./example/02-ConfigMap.yaml
kubectl delete -f ./example/01-Namespace.yaml
```
#### Passing values in mounted drive as .env file
Create Namespace, ConfigMap and Pod
```bash
kubectl create -f ./example/01-Namespace.yaml
kubectl create -f ./example/04-ConfigMap.yaml
kubectl create -f ./example/05-Pod.yaml
```
Check if the file exists in Pod
```bash
kubectl exec -it app-frontend-pod sh
cd /test
ls -ltra
cat .env
```
```bash
kubectl describe configmap app-data
```
Delete Pod, ConfigMap and Namespace
```bash
kubectl delete -f ./example/05-Pod.yaml
kubectl delete -f ./example/04-ConfigMap.yaml
kubectl delete -f ./example/01-Namespace.yaml
```
Delete cluster or Clean Up(Optional) 
```bash
minikube delete -p k8s
```
---
### Links
* [Home](https://github.com/vimalmenon/k8s-learn)
* [Previous Topic (CronJob)](https://github.com/vimalmenon/k8s-learn/tree/master/example/CronJob)
* [Next Topic (Secret)](https://github.com/vimalmenon/k8s-learn/tree/master/example/Secret)
