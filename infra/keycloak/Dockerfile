FROM quay.io/keycloak/keycloak:17.0.0-legacy

USER root
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

USER jboss
ENV KEYCLOAK_BCRYPT_VERSION=1.5.0

RUN mkdir /opt/jboss/keycloak/providers
RUN curl -L https://github.com/leroyguillaume/keycloak-bcrypt/releases/download/${KEYCLOAK_BCRYPT_VERSION}/keycloak-bcrypt-${KEYCLOAK_BCRYPT_VERSION}.jar > /opt/jboss/keycloak/providers/keycloak-bcrypt-${KEYCLOAK_BCRYPT_VERSION}.jar