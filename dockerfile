FROM eclipse-temurin:17

WORKDIR /app

COPY calculator.java .

RUN javac calculator.java

CMD ["java",  "calculator"]