FROM openjdk:8-jdk-alpine
ADD /target/migration-1.0-jar-with-dependencies.jar migration.jar
ENTRYPOINT ["java", "-jar", "migration.jar", "migration"]