from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.pagination import PageNumberPagination # 必須引入分頁器
from .models import MyHello, Course
from .serializers import MyHelloSerializer, CourseSerializer

# --- MyHello API (Lab#3) ---
@api_view(['GET'])
@renderer_classes([JSONRenderer])
def myhello_list(request):
    # 這裡改成 all()，資料庫空的也不會報錯
    data = MyHello.objects.all().order_by('id') 
    
    # 加上分頁處理
    paginator = PageNumberPagination()
    page = paginator.paginate_queryset(data, request)
    if page is not None:
        serializer = MyHelloSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    serializer = MyHelloSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def myhello_add(request):
    serializer = MyHelloSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "資料已存入！"}, status=201)
    return Response(serializer.errors, status=400)

# --- Course API (HW1) ---
@api_view(['GET'])
@renderer_classes([JSONRenderer])
def course_list(request):
    # 這裡是最關鍵的修正！把 get(id=1) 改成 all()
    data = Course.objects.all().order_by('id') 
    
    # 加上分頁處理
    paginator = PageNumberPagination()
    page = paginator.paginate_queryset(data, request)
    if page is not None:
        serializer = CourseSerializer(page, many=True)
        return paginator.get_paginated_response(serializer.data)

    serializer = CourseSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def course_add(request):
    # 判斷資料來源：優先看 POST 內容，如果沒有再看網址參數
    if request.method == 'POST':
        data = request.data
    else:
        # 這是為了支援你剛才想要的「網址直接新增」功能
        data = {
            "course_name": request.query_params.get('course_name'),
            "teacher": request.query_params.get('teacher'),
            "description": request.query_params.get('description')
        }

    serializer = CourseSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "課程已新增！", "data": serializer.data}, status=201)
    
    # 如果噴錯，把錯誤訊息傳回給你看
    return Response(serializer.errors, status=400)