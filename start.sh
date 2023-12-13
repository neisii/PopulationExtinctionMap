# /bin/bash
forever start -c "npm start" ./

# 프로세스 확인
#forever list

# 프로세스 내리기
# forever stop -c "node stop"

# 포트를 사용중인 프로세스(따로 내려줘야 함)
#lsof -i :5500