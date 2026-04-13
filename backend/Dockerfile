FROM openjdk:23-jdk-slim

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} paris-attractions-backend.jar

ENTRYPOINT ["java", "-jar", "/paris-attractions-backend.jar"]
