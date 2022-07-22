FROM quay.io/keycloak/keycloak:18.0.1

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev --proxy=passthrough", "--http-relative-path=auth", "--auto-build"]
