FROM eclipse-temurin:23-jdk

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} paris-attractions-backend.jar

ENTRYPOINT ["java", "-jar", "/paris-attractions-backend.jar"]
