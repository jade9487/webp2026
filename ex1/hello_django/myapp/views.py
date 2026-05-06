from rest_framework.decorators import api_view
from rest_framework.response import Response
import logging

logger = logging.getLogger('django')

@api_view(['GET'])
def hello_rest_api(request):
    # 嘗試從網址取得 name 參數，如果沒有傳，預設就是 "cj" (或是你想顯示的文字)
    name = request.query_params.get('name', None)
    
    if name:
        message_text = f"Hello, {name}! This is Django REST framework!"
    else:
        # 這就是你圖片中顯示的預設內容
        message_text = "Hello, this is Django REST framework!"

    # 記錄 Log
    logger.info(f"API called with name: {name}")
    
    return Response({
        "message": message_text,
        "status": "success"
    })
