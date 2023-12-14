docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probadesyat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probadesyat-java/app ../../..
