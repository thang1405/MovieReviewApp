# MovieReviewApp

##### Clone project về máy tính cá nhân
```bash
git clone https://github.com/thang1405/MovieReviewApp.git
```

##### lấy nhánh từ github về máy
```bash
git fetch
```

##### đổi sáng nhánh để code 

```bash
git checkout 1-home-view
```

##### working [current branch]
```bash
# --------------- Working ---------------
# work...
# work...
# work...
# ---------------- Done -----------------
```

##### để đẩy code lên git
##### 1.tạo trạng thái thay đổi
```bash
git add .
```

##### 2.Commit code
```bash
git commit -m "make view for home"
```

##### 3.đẩy code [local branch] '1-home-view' lên [online branch] '1-home-view'(từ máy lên github)
```bash
git push origin 1-home-view
# Then create [pull request] on github
```
##### để lấy code từ git về máy
##### lấy code từ nhánh [online branch] 'dev' vào nhánh [local branch] '1-home-view'
```bash
git pull origin dev
# Fix conflict code if it has and commit again
```
**Then return to [Working...](#then-working-on-current-branch)**

##### chạy project sau khi clone 
##### 1.cài node_modules
```bash
npm install
```
##### 2.chạy project
```bash
npm start
```
##### 3.quét mã qr code




