from django.shortcuts import render, HttpResponse
# Create your views here. 
def index (request):
    return render (request,'index.html')
def sumando(request):
    li= request.GET.getlist('suma[]')
    suma=0
    for i in li:
        suma += int(i)
    return HttpResponse("la suma de los numeros es : <strong> "+str(suma) +"</strong>")

def divisor(request):
    dividendo= request.POST["dividendo"]
    divisor= request.POST["divisor"]
    
    division = int(dividendo) / int(divisor)

    return HttpResponse("la division de los numeros es : <strong> "+str(division) + "</strong>")

