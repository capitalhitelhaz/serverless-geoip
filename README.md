# Serverless GeoIP

[![Codeship Status for capitalhitelhaz/serverless-geoip](https://app.codeship.com/projects/399a59e0-d156-0137-e549-7a3d993b42a3/status?branch=master)](https://app.codeship.com/projects/369439)

FYI - triggering a build auto-deploys the latest MaxMind GeoLite 2 city database.

Use AWS Lambda and [MaxMind GeoLite](http://dev.maxmind.com/geoip/geoip2/geolite2/) to query for locations of IP addresses. You can invoke the function or use API Gateway to send an HTTP request with the IP address to lookup.

## Install

```bash
\$ > git clone git@github.com:sbstjn/serverless-geoip.git
\$ > cd serverless-geoip
\$ > yarn install
```

## Configure

Download the [GeoLite2 City](http://dev.maxmind.com/geoip/geoip2/geolite2/) database and store the file inside the `data` folder.

```bash
.
└── data
    └── GeoLite2-City.mmdb
```

## Deploy

```bash
\$ > yarn deploy

…

endpoints:
  GET - https://randomid.execute-api.us-east-1.amazonaws.com/dev/ip/{ip}
```

## Usage

### Invoke

```bash
\$ > sls invoke -f lookup --data '{ "ip": "8.8.8.8" }'

{
    "continent": {
        "code": "NA",
        "geoname_id": 6255149,
        "names": {
            "de": "Nordamerika",
            "en": "North America",
            "es": "Norteamérica",

…
…
```

### HTTP Request

```bash
\$ > curl https://randomid.execute-api.us-east-1.amazonaws.com/dev/ip/8.8.8.8

{"continent":{"code":"NA","geoname_id":6255149,"names":{"de":"Nordamerika","en":"North America", …
```
