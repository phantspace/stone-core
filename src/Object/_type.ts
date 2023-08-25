/* 
#TODO: 
@see https://www.typescriptlang.org/docs/handbook/utility-types.html#uppercasestringtype
  Awaited<Type> 解开 Promise
  Partial<Type> Type 使 T 中的所有属性均为可选属性
  Required<Type> Type 使 T 中的所有属性均为必选属性
  Readonly<Type> Type 使 T 中的所有属性均为readonly属性
  Record<Keys, Type> 定义对象
  Pick<Type, Keys> 从 中选取属性集Keys（字符串文字或字符串文字的并集）来构造类型Type。  key 交集
  Omit<Type, Keys> 从中选取所有属性然后删除Keys（字符串文字或字符串文字的并集）来构造类型。  key 集合1相对于集合2 的差集
  Exclude<UnionType, ExcludedMembers> 通过排除所有可分配给 的联合成员来构造类型    type 集合1相对于集合2 的差集
  Extract<Type, Union>   type 交集
  NonNullable<Type>  排除 type 中的 undefined | null
  Parameters<Type> 根据函数类型的参数中使用的类型构造元组类型 参数转数组
  ConstructorParameters<Type>
  ReturnType<Type> 提取 function 的返回 type
  InstanceType<Type>
  ThisParameterType<Type>
  OmitThisParameter<Type>
 */
export interface Object<T> extends Record<string, T> {}
