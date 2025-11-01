FROM openjdk:8-jdk-alpine
ENV port=8765
EXPOSE 8765
ADD /target/gateway-1.0.jar gateway.jar
ENTRYPOINT java -jar gateway.jar gateway