## Ansible 配置无秘钥登录

Ansible 免密登录使用的是 ssh 认证方式，配置比较简单

### 生成管理节点机的公钥和私钥

```bash
ssh-keygen
```

### 添加目标节点的 ssh 认证信息

```bash
ssh-copy-id root@ip地址
```

### 测试免密登录是否成功

```bash
ansible testserver -i hosts -m ping
```
