import { useState } from "react";

const questions = [
  // Fill in the Blanks
  {
    type: "blanks",
    title: "Model __str__",
    description: "Define the human-readable string for a Category instance.",
    code: `class Category(models.Model):
    name = models.CharField(max_length=300)

    def ___BLANK1___(self):
        return self.___BLANK2___`,
    blanks: { BLANK1: "__str__", BLANK2: "name" },
  },
  {
    type: "blanks",
    title: "perform_create injects user",
    description: "Attach the request user as the owner during create.",
    code: `class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def ___BLANK1___(self, serializer):
        serializer.save(___BLANK2___=self.___BLANK3___.user)`,
    blanks: { BLANK1: "perform_create", BLANK2: "owner", BLANK3: "request" },
  },
  {
    type: "blanks",
    title: "ViewSet and router",
    description: "Register a full-CRUD ViewSet with the default router.",
    code: `from rest_framework import viewsets, routers

class ProductViewSet(viewsets.___BLANK1___):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

router = routers.___BLANK2___()
router.___BLANK3___(r'products', ProductViewSet)`,
    blanks: { BLANK1: "ModelViewSet", BLANK2: "DefaultRouter", BLANK3: "register" },
  },
  {
    type: "blanks",
    title: "validate_<field> method",
    description: "Reject negative prices on the price field.",
    code: `class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def ___BLANK1____price(self, value):
        if value < 0:
            raise serializers.___BLANK2___('Price must be non-negative')
        return ___BLANK3___`,
    blanks: { BLANK1: "validate", BLANK2: "ValidationError", BLANK3: "value" },
  },
  {
    type: "blanks",
    title: "render() with a template",
    description: "Use the Django template system to render an HTML response.",
    code: `from django.___BLANK1___ import render

def home(request):
    context = {'title': 'Welcome'}
    return ___BLANK2___(request, '___BLANK3___', context)`,
    blanks: { BLANK1: "shortcuts", BLANK2: "render", BLANK3: "home.html" },
  },
  {
    type: "blanks",
    title: "Cross-field validate()",
    description: "Reject input where end is not after start.",
    code: `class TimeRangeSerializer(serializers.Serializer):
    start = serializers.IntegerField()
    end = serializers.IntegerField()

    def ___BLANK1___(self, attrs):
        if attrs['start'] >= attrs['end']:
            raise serializers.___BLANK2___('start must be before end')
        return ___BLANK3___`,
    blanks: { BLANK1: "validate", BLANK2: "ValidationError", BLANK3: "attrs" },
  },
  {
    type: "blanks",
    title: "JWT URLs imports",
    description: "Import and wire the obtain-pair and refresh views.",
    code: `from rest_framework_simplejwt.views import (
    ___BLANK1___,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', ___BLANK1___.___BLANK2___(), name='token_obtain_pair'),
    path('api/token/refresh/', ___BLANK3___.as_view(), name='token_refresh'),
]`,
    blanks: { BLANK1: "TokenObtainPairView", BLANK2: "as_view", BLANK3: "TokenRefreshView" },
  },
  {
    type: "blanks",
    title: "DELETE returns 204",
    description: "Implement the destroy handler returning the right status.",
    code: `def delete(self, request, product_id):
    product = self.get_object(product_id)
    product.___BLANK1___()
    return Response(status=status.HTTP_204____BLANK2___)`,
    blanks: { BLANK1: "delete", BLANK2: "NO_CONTENT" },
  },
  {
    type: "blanks",
    title: "Custom ViewSet endpoint",
    description: "Add a custom list-style endpoint to a ViewSet.",
    code: `from rest_framework.decorators import action

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()

    @___BLANK1___(detail=___BLANK2___, methods=['get'])
    def featured(self, request):
        qs = Product.objects.filter(is_featured=True)
        serializer = self.get_serializer(qs, ___BLANK3___=True)
        return Response(serializer.data)`,
    blanks: { BLANK1: "action", BLANK2: "False", BLANK3: "many" },
  },
  {
    type: "blanks",
    title: "Concrete generic views",
    description: "Use the concrete generic views for full CRUD.",
    code: `from rest_framework import generics

class ProductListAPIView(generics.___BLANK1___):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.___BLANK2___):
    queryset = Product.objects.all()
    ___BLANK3___ = 'product_id'`,
    blanks: { BLANK1: "ListCreateAPIView", BLANK2: "RetrieveUpdateDestroyAPIView", BLANK3: "lookup_field" },
  },
  {
    type: "blanks",
    title: "CORS app and middleware",
    description: "Wire django-cors-headers into INSTALLED_APPS and MIDDLEWARE.",
    code: `INSTALLED_APPS = [
    'django.contrib.admin',
    'rest_framework',
    '___BLANK1___',
]

MIDDLEWARE = [
    '___BLANK1___.___BLANK2___.___BLANK3___',
    'django.middleware.common.CommonMiddleware',
]`,
    blanks: { BLANK1: "corsheaders", BLANK2: "middleware", BLANK3: "CorsMiddleware" },
  },
  {
    type: "blanks",
    title: "DRF function-based view",
    description: "Complete the DRF function-based list/create view.",
    code: `@___BLANK1___(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, ___BLANK2___=True)
        return ___BLANK3___(serializer.data)`,
    blanks: { BLANK1: "api_view", BLANK2: "many", BLANK3: "Response" },
  },
  {
    type: "blanks",
    title: "SerializerMethodField",
    description: "Expose a computed discounted_price field on the serializer.",
    code: `class ProductSerializer(serializers.ModelSerializer):
    discounted_price = serializers.___BLANK1___()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'discounted_price']

    def ___BLANK2____discounted_price(self, ___BLANK3___):
        return obj.price * Decimal('0.9')`,
    blanks: { BLANK1: "SerializerMethodField", BLANK2: "get", BLANK3: "obj" },
  },
  {
    type: "blanks",
    title: "write_only and read_only_fields",
    description: "Hide the password from responses while keeping id read-only.",
    code: `class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(___BLANK1___=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        ___BLANK2____fields = ['id']

    def create(self, validated_data):
        return User.objects.___BLANK3___(**validated_data)`,
    blanks: { BLANK1: "write_only", BLANK2: "read_only", BLANK3: "create_user" },
  },
  // Short Answer questions
  {
    type: "short",
    title: "Dev server command",
    question: "Which manage.py sub-command starts Django's built-in development web server?",
    answer: "runserver",
  },
  {
    type: "short",
    title: "Create a new app",
    question: "Which manage.py sub-command scaffolds a brand-new Django app inside the project?",
    answer: "startapp",
  },
  {
    type: "short",
    title: "Default router class",
    question: "Which DRF router class auto-generates URL patterns for a registered ViewSet?",
    answer: "DefaultRouter",
  },
  {
    type: "short",
    title: "JWT login endpoint class",
    question: "Which Simple JWT class-based view returns an access + refresh token pair when given valid credentials?",
    answer: "TokenObtainPairView",
  },
  {
    type: "short",
    title: "OrderingFilter query param",
    question: "With DRF's OrderingFilter enabled, which URL query parameter requests result ordering? (the part before =)",
    answer: "ordering",
  },
  {
    type: "short",
    title: "SearchFilter query param",
    question: "With DRF's SearchFilter enabled, which URL query parameter triggers the search? (the part before =)",
    answer: "search",
  },
  {
    type: "short",
    title: "DRF settings dict name",
    question: "What is the name of the top-level dictionary in settings.py that holds DRF-wide configuration?",
    answer: "REST_FRAMEWORK",
  },
  {
    type: "short",
    title: "request method check",
    question: 'In a raw Django view, which expression on the request object tells you the HTTP verb? (e.g. if ____ == "GET")',
    answer: "request.method",
  },
  {
    type: "short",
    title: "OPTIONS HTTP method",
    question: "Which HTTP method returns the supported HTTP methods for the given URL?",
    answer: "OPTIONS",
  },
  {
    type: "short",
    title: "PageNumberPagination param",
    question: "With PageNumberPagination enabled, which URL query parameter selects the page number?",
    answer: "page",
  },
  {
    type: "short",
    title: "Many-to-many field",
    question: "Which model field type expresses a many-to-many relationship?",
    answer: "ManyToManyField",
  },
  {
    type: "short",
    title: "String representation method",
    question: "Which dunder method do you implement on a Django model to control how the instance is shown in admin and shell?",
    answer: "__str__",
  },
  {
    type: "short",
    title: "Computed read-only field",
    question: "Which serializer field type is read-only and gets its value from a get_<field_name> method?",
    answer: "SerializerMethodField",
  },
  {
    type: "short",
    title: "Custom ViewSet endpoint decorator",
    question: "Which DRF decorator declares an extra custom endpoint on a ViewSet (beyond standard CRUD)?",
    answer: "@action",
  },
  {
    type: "short",
    title: "CBV URL registration method",
    question: "When wiring a class-based view in urls.py, which class method turns the class into a callable view?",
    answer: "as_view",
  },
  {
    type: "short",
    title: "Install Simple JWT",
    question: "Which pip package adds JWT authentication to a Django REST Framework project?",
    answer: "djangorestframework-simplejwt",
  },
];

function BlankInput({ name, value, onChange, correct, showResult }) {
  let borderColor = "rgba(255,255,255,0.15)";
  let bg = "rgba(0,0,0,0.3)";
  if (showResult) {
    borderColor = correct ? "#22c55e" : "#ef4444";
    bg = correct ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)";
  }
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={name}
      style={{
        background: bg,
        border: `2px solid ${borderColor}`,
        borderRadius: 6,
        color: "#e2e8f0",
        padding: "6px 12px",
        fontSize: 14,
        fontFamily: "'JetBrains Mono', monospace",
        width: Math.max(120, (value?.length || 8) * 10),
        maxWidth: 280,
        outline: "none",
        transition: "all 0.3s ease",
      }}
    />
  );
}

function CodeBlock({ code, blanks, answers, onChange, showResult, correctAnswers }) {
  const parts = code.split(/(___BLANK\d+___)/g);
  return (
    <pre
      style={{
        background: "#0f172a",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: 10,
        padding: "20px 24px",
        overflowX: "auto",
        fontSize: 13,
        lineHeight: 1.8,
        fontFamily: "'JetBrains Mono', monospace",
        color: "#94a3b8",
        margin: 0,
      }}
    >
      {parts.map((part, i) => {
        const match = part.match(/___BLANK(\d+)___/);
        if (match) {
          const key = `BLANK${match[1]}`;
          const isCorrect =
            answers[key]?.trim().toLowerCase() ===
            correctAnswers[key]?.toLowerCase();
          return (
            <BlankInput
              key={i}
              name={key}
              value={answers[key] || ""}
              onChange={onChange}
              correct={isCorrect}
              showResult={showResult}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </pre>
  );
}

export default function DjangoQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [shortAnswer, setShortAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleBlankChange = (name, value) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const checkAnswer = () => {
    setShowResult(true);
    let correct = false;

    if (q.type === "blanks") {
      const blankKeys = Object.keys(q.blanks);
      const allCorrect = blankKeys.every(
        (key) =>
          answers[key]?.trim().toLowerCase() === q.blanks[key].toLowerCase()
      );
      correct = allCorrect;
    } else {
      correct =
        shortAnswer.trim().toLowerCase() === q.answer.toLowerCase();
    }

    if (correct) setScore((s) => s + 1);
    setTotalAnswered((t) => t + 1);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setAnswers({});
      setShortAnswer("");
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setAnswers({});
    setShortAnswer("");
    setShowResult(false);
    setScore(0);
    setTotalAnswered(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          padding: 20,
        }}
      >
        <div
          style={{
            background: "rgba(15,23,42,0.9)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 20,
            padding: 48,
            textAlign: "center",
            maxWidth: 500,
            width: "100%",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>
            {pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}
          </div>
          <h1 style={{ color: "#e2e8f0", fontSize: 28, margin: "0 0 8px" }}>
            Тест завершён!
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 18, margin: "0 0 24px" }}>
            Результат: <span style={{ color: "#818cf8", fontWeight: 700 }}>{score}</span> из{" "}
            <span style={{ color: "#818cf8", fontWeight: 700 }}>{questions.length}</span> ({pct}%)
          </p>
          <button
            onClick={restart}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "white",
              border: "none",
              borderRadius: 10,
              padding: "14px 36px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Пройти заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        padding: "24px 16px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: "#e2e8f0", fontSize: 22, margin: 0, fontWeight: 700 }}>
            Django & DRF Quiz
          </h1>
          <p style={{ color: "#64748b", margin: "4px 0 0", fontSize: 13 }}>
            Fill in the Blanks & Short Answer
          </p>
        </div>
        <div
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 10,
            padding: "8px 16px",
            color: "#818cf8",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {current + 1} / {questions.length}
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto 24px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 6,
          height: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
            height: "100%",
            background: "linear-gradient(90deg, #6366f1, #a78bfa)",
            borderRadius: 6,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Question card */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: "rgba(15,23,42,0.8)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 16,
          padding: 32,
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}>
          <span
            style={{
              background:
                q.type === "blanks"
                  ? "rgba(99,102,241,0.2)"
                  : "rgba(16,185,129,0.2)",
              color: q.type === "blanks" ? "#818cf8" : "#34d399",
              padding: "4px 12px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {q.type === "blanks" ? "Fill in the Blanks" : "Short Answer"}
          </span>
          <span style={{ color: "#475569", fontSize: 12 }}>
            Score: {score}/{totalAnswered}
          </span>
        </div>

        <h2
          style={{
            color: "#e2e8f0",
            fontSize: 20,
            margin: "0 0 8px",
            fontWeight: 700,
          }}
        >
          {q.title}
        </h2>
        <p style={{ color: "#94a3b8", margin: "0 0 20px", fontSize: 14 }}>
          {q.type === "blanks" ? q.description : q.question}
        </p>

        {/* Code block with blanks */}
        {q.type === "blanks" && (
          <CodeBlock
            code={q.code}
            blanks={q.blanks}
            answers={answers}
            onChange={handleBlankChange}
            showResult={showResult}
            correctAnswers={q.blanks}
          />
        )}

        {/* Short answer input */}
        {q.type === "short" && (
          <div>
            <input
              type="text"
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              placeholder="Type your answer here..."
              style={{
                width: "100%",
                background: "rgba(0,0,0,0.3)",
                border: `2px solid ${
                  showResult
                    ? shortAnswer.trim().toLowerCase() === q.answer.toLowerCase()
                      ? "#22c55e"
                      : "#ef4444"
                    : "rgba(255,255,255,0.15)"
                }`,
                borderRadius: 10,
                color: "#e2e8f0",
                padding: "14px 18px",
                fontSize: 16,
                fontFamily: "'JetBrains Mono', monospace",
                outline: "none",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        )}

        {/* Show correct answers */}
        {showResult && (
          <div
            style={{
              marginTop: 16,
              padding: "14px 18px",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 10,
              fontSize: 14,
              color: "#94a3b8",
            }}
          >
            <span style={{ fontWeight: 600, color: "#818cf8" }}>Правильные ответы: </span>
            {q.type === "blanks"
              ? Object.entries(q.blanks)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(" | ")
              : q.answer}
          </div>
        )}

        {/* Buttons */}
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "flex-end" }}>
          {!showResult ? (
            <button
              onClick={checkAnswer}
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Проверить
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              {current < questions.length - 1 ? "Следующий →" : "Завершить"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
