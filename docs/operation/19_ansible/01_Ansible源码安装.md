# Ansible 源码安装

## 本内容你将获得

- Linux 上 Ansible 最新稳定版本的源码安装教程

## 前置条件

- 安装 Python 3.x 环境

```bash
yum install -y python36 python36-pip git
ln -s /usr/bin/pip36 /usr/bin/pip3
```

- 安装 virtualenv 环境

```bash
pip install virtualenv
virtualenv -p /bin/python3.6 .py3-a2.5-env
source .py3-a2.5-env/bin/activate
```

- 安装 ansible Python 依赖包

```bash
pip3 install paramiko PyYAML jinja2
```

- 其他
  `yum install epel-release -y`

## 下载源码和安装

- 下载源码：
  `git clone git://github.com/ansible/ansible.git`

- 安装：

```bash
cd ansible/
python3 setup.py install
```

- 创建 Ansible 配置文件，开启 Ansible 日志(Ansible 默认不启用日志)

```bash
mkdir /etc/ansible
cp ansible/examples/ansible.cfg /etc/ansible/
sed -i 's/#log_path/log_path/' /etc/ansible/ansible.cfg
```

- 验证安装是否成功:`ansible --version`
