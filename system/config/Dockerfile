FROM eclipse-temurin:8-jdk-alpine
ENV port=8111
EXPOSE 8111
ADD /target/config-1.0.jar config.jar
ENTRYPOINT java -jar config.jar config