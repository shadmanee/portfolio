from django.shortcuts import render

def home(request):
    return render(request, 'base/home.html')

def summary(request):
    return render(request, 'base/summary.html')

def education(request):
    return render(request, 'base/education.html')

def work_experience(request):
    return render(request, 'base/work_experience.html')

def publications(request):
    return render(request, 'base/publications.html')

def research(request):
    return render(request, 'base/research.html')

def cv(request):
    return render(request, 'base/cv.html')

def contact(request):
    return render(request, 'base/contact.html')