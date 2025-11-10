FROM eclipse-temurin:8-jdk-alpine
ENV port=2222
EXPOSE 2222
ADD /target/service-discovery-1.0.jar eureka.jar
ENTRYPOINT java -jar eureka.jar eureka