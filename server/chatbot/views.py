from django.http import JsonResponse
from . import chatbot

def get_chatbot_response(request):
    try:
        query = request.GET.get('query', '')
        if query == '':
            return JsonResponse({'status': 'error', 'message': 'Query empty.'})

        else:
            answer = chatbot.get_chat(query)
        return JsonResponse({"response": answer})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': e})
