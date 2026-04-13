FROM maven:3.9-eclipse-temurin-23 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:23-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["sh", "-c", "java -jar app.jar --spring.data.mongodb.uri=mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${DATABASE}?retryWrites=true&w=majority"]
