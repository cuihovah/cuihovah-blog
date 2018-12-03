---
title: API 管理
date: 2018-12-01 14:55:07
tags:

---

API 网关是数据及系统集成的基础设施，支持将云端应用及数据通过简单、快速地配置转化为 API，同时提供安全独立的数据门户以及统一管控的开发者中心，帮助用户实现数据开放及共享。

## 需求分析

1. API 接口的管理
2. API 的 MOCK

>mock测试就是在测试过程中，对于某些不容易构造或者不容易获取的对象，用一个虚拟的对象来创建以便测试的测试方法。

3. 降级与熔断
>服务熔断：一般是指软件系统中，由于某些原因使得服务出现了过载现象，为防止造成整个系统故障，从而采用的一种保护措施，所以很多地方把熔断亦称为过载保护。很多时候刚开始可能只是系统出现了局部的、小规模的故障，然而由于种种原因，故障影响的范围越来越大，最终导致了全局性的后果。
适用场景：防止应用程序直接调用那些很可能会调用失败的远程服务或共享资源
服务降级:当服务器压力剧增的情况下，根据当前业务情况及流量对一些服务和页面有策略的降级，以此释放服务器资源以保证核心任务的正常运行。

4. 存活性监控

## 概要设计

### Schema
#### API Schema
```
    {
        "_id": ObjectID
        "method": String,
        "protocol": String,
        "hostname": String,
        "pathname": String,
        "request": {
            "headers": Object,
            "params": Object,
            "query": Object,
            "body": Object
        },
        "response": {
            "headers": Object,
            "body": Object
        },
        "mocks": [ObjectID]
    }
```

#### MOCK Schema
```
{
    "_id": ObjectID,
    "api_id": ObjectID,
    "request": {
        "headers": object,
        "data": object,
    },
    "response": {
        "headers": object,
        "data": object,
    }
}
```

### API 概要设计

1. 添加 API
2. 删除 API
3. 修改 API
4. 查看 API
5. 查看 API 列表

### MOCK 概要设计

1. 相关字段
2. Mock Server

### 限流概要设计

1. 创建请求池
2. 修改请求数量

### 熔断概要设计

1. 熔断器的设计

###  监控概要设计

1. 监控器的概要设计

## 详细设计

### API 详细设计

1. 添加 API
2. 删除 API
3. 修改 API
4. 查看 API
5. 查看 API 列表

### MOCK 详细设计

1. 相关字段
2. Mock Server

### 限流详细设计

1. 创建请求池
2. 修改请求数量

### 熔断详细设计

1. 熔断器的设计

###  监控详细设计

1. 监控器的概要设计
