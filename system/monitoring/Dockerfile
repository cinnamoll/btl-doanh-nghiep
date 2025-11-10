FROM eclipse-temurin:8-jdk-alpine
ENV port=8000
EXPOSE 8000
ADD /target/monitoring-1.0.jar monitoring.jar
ENTRYPOINT java -jar monitoring.jar monitoring