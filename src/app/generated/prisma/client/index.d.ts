
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Mots
 * 
 */
export type Mots = $Result.DefaultSelection<Prisma.$MotsPayload>
/**
 * Model WallOfFame
 * 
 */
export type WallOfFame = $Result.DefaultSelection<Prisma.$WallOfFamePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mots`: Exposes CRUD operations for the **Mots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mots
    * const mots = await prisma.mots.findMany()
    * ```
    */
  get mots(): Prisma.MotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallOfFame`: Exposes CRUD operations for the **WallOfFame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WallOfFames
    * const wallOfFames = await prisma.wallOfFame.findMany()
    * ```
    */
  get wallOfFame(): Prisma.WallOfFameDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Mots: 'Mots',
    WallOfFame: 'WallOfFame'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mots" | "wallOfFame"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Mots: {
        payload: Prisma.$MotsPayload<ExtArgs>
        fields: Prisma.MotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          findFirst: {
            args: Prisma.MotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          findMany: {
            args: Prisma.MotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>[]
          }
          create: {
            args: Prisma.MotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          createMany: {
            args: Prisma.MotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>[]
          }
          delete: {
            args: Prisma.MotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          update: {
            args: Prisma.MotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          deleteMany: {
            args: Prisma.MotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>[]
          }
          upsert: {
            args: Prisma.MotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotsPayload>
          }
          aggregate: {
            args: Prisma.MotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMots>
          }
          groupBy: {
            args: Prisma.MotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotsCountArgs<ExtArgs>
            result: $Utils.Optional<MotsCountAggregateOutputType> | number
          }
        }
      }
      WallOfFame: {
        payload: Prisma.$WallOfFamePayload<ExtArgs>
        fields: Prisma.WallOfFameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WallOfFameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WallOfFameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          findFirst: {
            args: Prisma.WallOfFameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WallOfFameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          findMany: {
            args: Prisma.WallOfFameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>[]
          }
          create: {
            args: Prisma.WallOfFameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          createMany: {
            args: Prisma.WallOfFameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WallOfFameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>[]
          }
          delete: {
            args: Prisma.WallOfFameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          update: {
            args: Prisma.WallOfFameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          deleteMany: {
            args: Prisma.WallOfFameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WallOfFameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WallOfFameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>[]
          }
          upsert: {
            args: Prisma.WallOfFameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallOfFamePayload>
          }
          aggregate: {
            args: Prisma.WallOfFameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallOfFame>
          }
          groupBy: {
            args: Prisma.WallOfFameGroupByArgs<ExtArgs>
            result: $Utils.Optional<WallOfFameGroupByOutputType>[]
          }
          count: {
            args: Prisma.WallOfFameCountArgs<ExtArgs>
            result: $Utils.Optional<WallOfFameCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mots?: MotsOmit
    wallOfFame?: WallOfFameOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    numero: number | null
    password: string | null
    username: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    numero: number | null
    password: string | null
    username: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    numero: number
    password: number
    username: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    numero?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    numero?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    numero?: true
    password?: true
    username?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    numero?: true
    password?: true
    username?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    numero?: true
    password?: true
    username?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    numero: number
    password: string
    username: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    numero?: boolean
    password?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    numero?: boolean
    password?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    numero?: boolean
    password?: boolean
    username?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    numero?: boolean
    password?: boolean
    username?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "numero" | "password" | "username", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      numero: number
      password: string
      username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly numero: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Mots
   */

  export type AggregateMots = {
    _count: MotsCountAggregateOutputType | null
    _avg: MotsAvgAggregateOutputType | null
    _sum: MotsSumAggregateOutputType | null
    _min: MotsMinAggregateOutputType | null
    _max: MotsMaxAggregateOutputType | null
  }

  export type MotsAvgAggregateOutputType = {
    id: number | null
    longueur: number | null
  }

  export type MotsSumAggregateOutputType = {
    id: number | null
    longueur: number | null
  }

  export type MotsMinAggregateOutputType = {
    id: number | null
    word: string | null
    longueur: number | null
    difficulty: string | null
  }

  export type MotsMaxAggregateOutputType = {
    id: number | null
    word: string | null
    longueur: number | null
    difficulty: string | null
  }

  export type MotsCountAggregateOutputType = {
    id: number
    word: number
    longueur: number
    difficulty: number
    _all: number
  }


  export type MotsAvgAggregateInputType = {
    id?: true
    longueur?: true
  }

  export type MotsSumAggregateInputType = {
    id?: true
    longueur?: true
  }

  export type MotsMinAggregateInputType = {
    id?: true
    word?: true
    longueur?: true
    difficulty?: true
  }

  export type MotsMaxAggregateInputType = {
    id?: true
    word?: true
    longueur?: true
    difficulty?: true
  }

  export type MotsCountAggregateInputType = {
    id?: true
    word?: true
    longueur?: true
    difficulty?: true
    _all?: true
  }

  export type MotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mots to aggregate.
     */
    where?: MotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mots to fetch.
     */
    orderBy?: MotsOrderByWithRelationInput | MotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mots
    **/
    _count?: true | MotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotsMaxAggregateInputType
  }

  export type GetMotsAggregateType<T extends MotsAggregateArgs> = {
        [P in keyof T & keyof AggregateMots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMots[P]>
      : GetScalarType<T[P], AggregateMots[P]>
  }




  export type MotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotsWhereInput
    orderBy?: MotsOrderByWithAggregationInput | MotsOrderByWithAggregationInput[]
    by: MotsScalarFieldEnum[] | MotsScalarFieldEnum
    having?: MotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotsCountAggregateInputType | true
    _avg?: MotsAvgAggregateInputType
    _sum?: MotsSumAggregateInputType
    _min?: MotsMinAggregateInputType
    _max?: MotsMaxAggregateInputType
  }

  export type MotsGroupByOutputType = {
    id: number
    word: string
    longueur: number
    difficulty: string
    _count: MotsCountAggregateOutputType | null
    _avg: MotsAvgAggregateOutputType | null
    _sum: MotsSumAggregateOutputType | null
    _min: MotsMinAggregateOutputType | null
    _max: MotsMaxAggregateOutputType | null
  }

  type GetMotsGroupByPayload<T extends MotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotsGroupByOutputType[P]>
            : GetScalarType<T[P], MotsGroupByOutputType[P]>
        }
      >
    >


  export type MotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    longueur?: boolean
    difficulty?: boolean
  }, ExtArgs["result"]["mots"]>

  export type MotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    longueur?: boolean
    difficulty?: boolean
  }, ExtArgs["result"]["mots"]>

  export type MotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    longueur?: boolean
    difficulty?: boolean
  }, ExtArgs["result"]["mots"]>

  export type MotsSelectScalar = {
    id?: boolean
    word?: boolean
    longueur?: boolean
    difficulty?: boolean
  }

  export type MotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "longueur" | "difficulty", ExtArgs["result"]["mots"]>

  export type $MotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mots"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      longueur: number
      difficulty: string
    }, ExtArgs["result"]["mots"]>
    composites: {}
  }

  type MotsGetPayload<S extends boolean | null | undefined | MotsDefaultArgs> = $Result.GetResult<Prisma.$MotsPayload, S>

  type MotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotsCountAggregateInputType | true
    }

  export interface MotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mots'], meta: { name: 'Mots' } }
    /**
     * Find zero or one Mots that matches the filter.
     * @param {MotsFindUniqueArgs} args - Arguments to find a Mots
     * @example
     * // Get one Mots
     * const mots = await prisma.mots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotsFindUniqueArgs>(args: SelectSubset<T, MotsFindUniqueArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotsFindUniqueOrThrowArgs} args - Arguments to find a Mots
     * @example
     * // Get one Mots
     * const mots = await prisma.mots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotsFindUniqueOrThrowArgs>(args: SelectSubset<T, MotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsFindFirstArgs} args - Arguments to find a Mots
     * @example
     * // Get one Mots
     * const mots = await prisma.mots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotsFindFirstArgs>(args?: SelectSubset<T, MotsFindFirstArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsFindFirstOrThrowArgs} args - Arguments to find a Mots
     * @example
     * // Get one Mots
     * const mots = await prisma.mots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotsFindFirstOrThrowArgs>(args?: SelectSubset<T, MotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mots
     * const mots = await prisma.mots.findMany()
     * 
     * // Get first 10 Mots
     * const mots = await prisma.mots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motsWithIdOnly = await prisma.mots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotsFindManyArgs>(args?: SelectSubset<T, MotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mots.
     * @param {MotsCreateArgs} args - Arguments to create a Mots.
     * @example
     * // Create one Mots
     * const Mots = await prisma.mots.create({
     *   data: {
     *     // ... data to create a Mots
     *   }
     * })
     * 
     */
    create<T extends MotsCreateArgs>(args: SelectSubset<T, MotsCreateArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mots.
     * @param {MotsCreateManyArgs} args - Arguments to create many Mots.
     * @example
     * // Create many Mots
     * const mots = await prisma.mots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotsCreateManyArgs>(args?: SelectSubset<T, MotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mots and returns the data saved in the database.
     * @param {MotsCreateManyAndReturnArgs} args - Arguments to create many Mots.
     * @example
     * // Create many Mots
     * const mots = await prisma.mots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mots and only return the `id`
     * const motsWithIdOnly = await prisma.mots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotsCreateManyAndReturnArgs>(args?: SelectSubset<T, MotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mots.
     * @param {MotsDeleteArgs} args - Arguments to delete one Mots.
     * @example
     * // Delete one Mots
     * const Mots = await prisma.mots.delete({
     *   where: {
     *     // ... filter to delete one Mots
     *   }
     * })
     * 
     */
    delete<T extends MotsDeleteArgs>(args: SelectSubset<T, MotsDeleteArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mots.
     * @param {MotsUpdateArgs} args - Arguments to update one Mots.
     * @example
     * // Update one Mots
     * const mots = await prisma.mots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotsUpdateArgs>(args: SelectSubset<T, MotsUpdateArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mots.
     * @param {MotsDeleteManyArgs} args - Arguments to filter Mots to delete.
     * @example
     * // Delete a few Mots
     * const { count } = await prisma.mots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotsDeleteManyArgs>(args?: SelectSubset<T, MotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mots
     * const mots = await prisma.mots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotsUpdateManyArgs>(args: SelectSubset<T, MotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mots and returns the data updated in the database.
     * @param {MotsUpdateManyAndReturnArgs} args - Arguments to update many Mots.
     * @example
     * // Update many Mots
     * const mots = await prisma.mots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mots and only return the `id`
     * const motsWithIdOnly = await prisma.mots.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotsUpdateManyAndReturnArgs>(args: SelectSubset<T, MotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mots.
     * @param {MotsUpsertArgs} args - Arguments to update or create a Mots.
     * @example
     * // Update or create a Mots
     * const mots = await prisma.mots.upsert({
     *   create: {
     *     // ... data to create a Mots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mots we want to update
     *   }
     * })
     */
    upsert<T extends MotsUpsertArgs>(args: SelectSubset<T, MotsUpsertArgs<ExtArgs>>): Prisma__MotsClient<$Result.GetResult<Prisma.$MotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsCountArgs} args - Arguments to filter Mots to count.
     * @example
     * // Count the number of Mots
     * const count = await prisma.mots.count({
     *   where: {
     *     // ... the filter for the Mots we want to count
     *   }
     * })
    **/
    count<T extends MotsCountArgs>(
      args?: Subset<T, MotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotsAggregateArgs>(args: Subset<T, MotsAggregateArgs>): Prisma.PrismaPromise<GetMotsAggregateType<T>>

    /**
     * Group by Mots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotsGroupByArgs['orderBy'] }
        : { orderBy?: MotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mots model
   */
  readonly fields: MotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mots model
   */
  interface MotsFieldRefs {
    readonly id: FieldRef<"Mots", 'Int'>
    readonly word: FieldRef<"Mots", 'String'>
    readonly longueur: FieldRef<"Mots", 'Int'>
    readonly difficulty: FieldRef<"Mots", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mots findUnique
   */
  export type MotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter, which Mots to fetch.
     */
    where: MotsWhereUniqueInput
  }

  /**
   * Mots findUniqueOrThrow
   */
  export type MotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter, which Mots to fetch.
     */
    where: MotsWhereUniqueInput
  }

  /**
   * Mots findFirst
   */
  export type MotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter, which Mots to fetch.
     */
    where?: MotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mots to fetch.
     */
    orderBy?: MotsOrderByWithRelationInput | MotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mots.
     */
    cursor?: MotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mots.
     */
    distinct?: MotsScalarFieldEnum | MotsScalarFieldEnum[]
  }

  /**
   * Mots findFirstOrThrow
   */
  export type MotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter, which Mots to fetch.
     */
    where?: MotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mots to fetch.
     */
    orderBy?: MotsOrderByWithRelationInput | MotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mots.
     */
    cursor?: MotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mots.
     */
    distinct?: MotsScalarFieldEnum | MotsScalarFieldEnum[]
  }

  /**
   * Mots findMany
   */
  export type MotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter, which Mots to fetch.
     */
    where?: MotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mots to fetch.
     */
    orderBy?: MotsOrderByWithRelationInput | MotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mots.
     */
    cursor?: MotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mots.
     */
    skip?: number
    distinct?: MotsScalarFieldEnum | MotsScalarFieldEnum[]
  }

  /**
   * Mots create
   */
  export type MotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * The data needed to create a Mots.
     */
    data: XOR<MotsCreateInput, MotsUncheckedCreateInput>
  }

  /**
   * Mots createMany
   */
  export type MotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mots.
     */
    data: MotsCreateManyInput | MotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mots createManyAndReturn
   */
  export type MotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * The data used to create many Mots.
     */
    data: MotsCreateManyInput | MotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mots update
   */
  export type MotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * The data needed to update a Mots.
     */
    data: XOR<MotsUpdateInput, MotsUncheckedUpdateInput>
    /**
     * Choose, which Mots to update.
     */
    where: MotsWhereUniqueInput
  }

  /**
   * Mots updateMany
   */
  export type MotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mots.
     */
    data: XOR<MotsUpdateManyMutationInput, MotsUncheckedUpdateManyInput>
    /**
     * Filter which Mots to update
     */
    where?: MotsWhereInput
    /**
     * Limit how many Mots to update.
     */
    limit?: number
  }

  /**
   * Mots updateManyAndReturn
   */
  export type MotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * The data used to update Mots.
     */
    data: XOR<MotsUpdateManyMutationInput, MotsUncheckedUpdateManyInput>
    /**
     * Filter which Mots to update
     */
    where?: MotsWhereInput
    /**
     * Limit how many Mots to update.
     */
    limit?: number
  }

  /**
   * Mots upsert
   */
  export type MotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * The filter to search for the Mots to update in case it exists.
     */
    where: MotsWhereUniqueInput
    /**
     * In case the Mots found by the `where` argument doesn't exist, create a new Mots with this data.
     */
    create: XOR<MotsCreateInput, MotsUncheckedCreateInput>
    /**
     * In case the Mots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotsUpdateInput, MotsUncheckedUpdateInput>
  }

  /**
   * Mots delete
   */
  export type MotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
    /**
     * Filter which Mots to delete.
     */
    where: MotsWhereUniqueInput
  }

  /**
   * Mots deleteMany
   */
  export type MotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mots to delete
     */
    where?: MotsWhereInput
    /**
     * Limit how many Mots to delete.
     */
    limit?: number
  }

  /**
   * Mots without action
   */
  export type MotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mots
     */
    select?: MotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mots
     */
    omit?: MotsOmit<ExtArgs> | null
  }


  /**
   * Model WallOfFame
   */

  export type AggregateWallOfFame = {
    _count: WallOfFameCountAggregateOutputType | null
    _avg: WallOfFameAvgAggregateOutputType | null
    _sum: WallOfFameSumAggregateOutputType | null
    _min: WallOfFameMinAggregateOutputType | null
    _max: WallOfFameMaxAggregateOutputType | null
  }

  export type WallOfFameAvgAggregateOutputType = {
    id: number | null
    scores: number | null
  }

  export type WallOfFameSumAggregateOutputType = {
    id: number | null
    scores: number | null
  }

  export type WallOfFameMinAggregateOutputType = {
    id: number | null
    scores: number | null
    login: string | null
  }

  export type WallOfFameMaxAggregateOutputType = {
    id: number | null
    scores: number | null
    login: string | null
  }

  export type WallOfFameCountAggregateOutputType = {
    id: number
    scores: number
    login: number
    _all: number
  }


  export type WallOfFameAvgAggregateInputType = {
    id?: true
    scores?: true
  }

  export type WallOfFameSumAggregateInputType = {
    id?: true
    scores?: true
  }

  export type WallOfFameMinAggregateInputType = {
    id?: true
    scores?: true
    login?: true
  }

  export type WallOfFameMaxAggregateInputType = {
    id?: true
    scores?: true
    login?: true
  }

  export type WallOfFameCountAggregateInputType = {
    id?: true
    scores?: true
    login?: true
    _all?: true
  }

  export type WallOfFameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallOfFame to aggregate.
     */
    where?: WallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallOfFames to fetch.
     */
    orderBy?: WallOfFameOrderByWithRelationInput | WallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WallOfFames
    **/
    _count?: true | WallOfFameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WallOfFameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WallOfFameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WallOfFameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WallOfFameMaxAggregateInputType
  }

  export type GetWallOfFameAggregateType<T extends WallOfFameAggregateArgs> = {
        [P in keyof T & keyof AggregateWallOfFame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallOfFame[P]>
      : GetScalarType<T[P], AggregateWallOfFame[P]>
  }




  export type WallOfFameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallOfFameWhereInput
    orderBy?: WallOfFameOrderByWithAggregationInput | WallOfFameOrderByWithAggregationInput[]
    by: WallOfFameScalarFieldEnum[] | WallOfFameScalarFieldEnum
    having?: WallOfFameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WallOfFameCountAggregateInputType | true
    _avg?: WallOfFameAvgAggregateInputType
    _sum?: WallOfFameSumAggregateInputType
    _min?: WallOfFameMinAggregateInputType
    _max?: WallOfFameMaxAggregateInputType
  }

  export type WallOfFameGroupByOutputType = {
    id: number
    scores: number
    login: string
    _count: WallOfFameCountAggregateOutputType | null
    _avg: WallOfFameAvgAggregateOutputType | null
    _sum: WallOfFameSumAggregateOutputType | null
    _min: WallOfFameMinAggregateOutputType | null
    _max: WallOfFameMaxAggregateOutputType | null
  }

  type GetWallOfFameGroupByPayload<T extends WallOfFameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WallOfFameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WallOfFameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WallOfFameGroupByOutputType[P]>
            : GetScalarType<T[P], WallOfFameGroupByOutputType[P]>
        }
      >
    >


  export type WallOfFameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scores?: boolean
    login?: boolean
  }, ExtArgs["result"]["wallOfFame"]>

  export type WallOfFameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scores?: boolean
    login?: boolean
  }, ExtArgs["result"]["wallOfFame"]>

  export type WallOfFameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scores?: boolean
    login?: boolean
  }, ExtArgs["result"]["wallOfFame"]>

  export type WallOfFameSelectScalar = {
    id?: boolean
    scores?: boolean
    login?: boolean
  }

  export type WallOfFameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scores" | "login", ExtArgs["result"]["wallOfFame"]>

  export type $WallOfFamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WallOfFame"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scores: number
      login: string
    }, ExtArgs["result"]["wallOfFame"]>
    composites: {}
  }

  type WallOfFameGetPayload<S extends boolean | null | undefined | WallOfFameDefaultArgs> = $Result.GetResult<Prisma.$WallOfFamePayload, S>

  type WallOfFameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WallOfFameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WallOfFameCountAggregateInputType | true
    }

  export interface WallOfFameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WallOfFame'], meta: { name: 'WallOfFame' } }
    /**
     * Find zero or one WallOfFame that matches the filter.
     * @param {WallOfFameFindUniqueArgs} args - Arguments to find a WallOfFame
     * @example
     * // Get one WallOfFame
     * const wallOfFame = await prisma.wallOfFame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WallOfFameFindUniqueArgs>(args: SelectSubset<T, WallOfFameFindUniqueArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WallOfFame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WallOfFameFindUniqueOrThrowArgs} args - Arguments to find a WallOfFame
     * @example
     * // Get one WallOfFame
     * const wallOfFame = await prisma.wallOfFame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WallOfFameFindUniqueOrThrowArgs>(args: SelectSubset<T, WallOfFameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallOfFame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameFindFirstArgs} args - Arguments to find a WallOfFame
     * @example
     * // Get one WallOfFame
     * const wallOfFame = await prisma.wallOfFame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WallOfFameFindFirstArgs>(args?: SelectSubset<T, WallOfFameFindFirstArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WallOfFame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameFindFirstOrThrowArgs} args - Arguments to find a WallOfFame
     * @example
     * // Get one WallOfFame
     * const wallOfFame = await prisma.wallOfFame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WallOfFameFindFirstOrThrowArgs>(args?: SelectSubset<T, WallOfFameFindFirstOrThrowArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WallOfFames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WallOfFames
     * const wallOfFames = await prisma.wallOfFame.findMany()
     * 
     * // Get first 10 WallOfFames
     * const wallOfFames = await prisma.wallOfFame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallOfFameWithIdOnly = await prisma.wallOfFame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WallOfFameFindManyArgs>(args?: SelectSubset<T, WallOfFameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WallOfFame.
     * @param {WallOfFameCreateArgs} args - Arguments to create a WallOfFame.
     * @example
     * // Create one WallOfFame
     * const WallOfFame = await prisma.wallOfFame.create({
     *   data: {
     *     // ... data to create a WallOfFame
     *   }
     * })
     * 
     */
    create<T extends WallOfFameCreateArgs>(args: SelectSubset<T, WallOfFameCreateArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WallOfFames.
     * @param {WallOfFameCreateManyArgs} args - Arguments to create many WallOfFames.
     * @example
     * // Create many WallOfFames
     * const wallOfFame = await prisma.wallOfFame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WallOfFameCreateManyArgs>(args?: SelectSubset<T, WallOfFameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WallOfFames and returns the data saved in the database.
     * @param {WallOfFameCreateManyAndReturnArgs} args - Arguments to create many WallOfFames.
     * @example
     * // Create many WallOfFames
     * const wallOfFame = await prisma.wallOfFame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WallOfFames and only return the `id`
     * const wallOfFameWithIdOnly = await prisma.wallOfFame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WallOfFameCreateManyAndReturnArgs>(args?: SelectSubset<T, WallOfFameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WallOfFame.
     * @param {WallOfFameDeleteArgs} args - Arguments to delete one WallOfFame.
     * @example
     * // Delete one WallOfFame
     * const WallOfFame = await prisma.wallOfFame.delete({
     *   where: {
     *     // ... filter to delete one WallOfFame
     *   }
     * })
     * 
     */
    delete<T extends WallOfFameDeleteArgs>(args: SelectSubset<T, WallOfFameDeleteArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WallOfFame.
     * @param {WallOfFameUpdateArgs} args - Arguments to update one WallOfFame.
     * @example
     * // Update one WallOfFame
     * const wallOfFame = await prisma.wallOfFame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WallOfFameUpdateArgs>(args: SelectSubset<T, WallOfFameUpdateArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WallOfFames.
     * @param {WallOfFameDeleteManyArgs} args - Arguments to filter WallOfFames to delete.
     * @example
     * // Delete a few WallOfFames
     * const { count } = await prisma.wallOfFame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WallOfFameDeleteManyArgs>(args?: SelectSubset<T, WallOfFameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallOfFames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WallOfFames
     * const wallOfFame = await prisma.wallOfFame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WallOfFameUpdateManyArgs>(args: SelectSubset<T, WallOfFameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WallOfFames and returns the data updated in the database.
     * @param {WallOfFameUpdateManyAndReturnArgs} args - Arguments to update many WallOfFames.
     * @example
     * // Update many WallOfFames
     * const wallOfFame = await prisma.wallOfFame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WallOfFames and only return the `id`
     * const wallOfFameWithIdOnly = await prisma.wallOfFame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WallOfFameUpdateManyAndReturnArgs>(args: SelectSubset<T, WallOfFameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WallOfFame.
     * @param {WallOfFameUpsertArgs} args - Arguments to update or create a WallOfFame.
     * @example
     * // Update or create a WallOfFame
     * const wallOfFame = await prisma.wallOfFame.upsert({
     *   create: {
     *     // ... data to create a WallOfFame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WallOfFame we want to update
     *   }
     * })
     */
    upsert<T extends WallOfFameUpsertArgs>(args: SelectSubset<T, WallOfFameUpsertArgs<ExtArgs>>): Prisma__WallOfFameClient<$Result.GetResult<Prisma.$WallOfFamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WallOfFames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameCountArgs} args - Arguments to filter WallOfFames to count.
     * @example
     * // Count the number of WallOfFames
     * const count = await prisma.wallOfFame.count({
     *   where: {
     *     // ... the filter for the WallOfFames we want to count
     *   }
     * })
    **/
    count<T extends WallOfFameCountArgs>(
      args?: Subset<T, WallOfFameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WallOfFameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WallOfFame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WallOfFameAggregateArgs>(args: Subset<T, WallOfFameAggregateArgs>): Prisma.PrismaPromise<GetWallOfFameAggregateType<T>>

    /**
     * Group by WallOfFame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallOfFameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WallOfFameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WallOfFameGroupByArgs['orderBy'] }
        : { orderBy?: WallOfFameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WallOfFameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallOfFameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WallOfFame model
   */
  readonly fields: WallOfFameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WallOfFame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WallOfFameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WallOfFame model
   */
  interface WallOfFameFieldRefs {
    readonly id: FieldRef<"WallOfFame", 'Int'>
    readonly scores: FieldRef<"WallOfFame", 'Int'>
    readonly login: FieldRef<"WallOfFame", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WallOfFame findUnique
   */
  export type WallOfFameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter, which WallOfFame to fetch.
     */
    where: WallOfFameWhereUniqueInput
  }

  /**
   * WallOfFame findUniqueOrThrow
   */
  export type WallOfFameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter, which WallOfFame to fetch.
     */
    where: WallOfFameWhereUniqueInput
  }

  /**
   * WallOfFame findFirst
   */
  export type WallOfFameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter, which WallOfFame to fetch.
     */
    where?: WallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallOfFames to fetch.
     */
    orderBy?: WallOfFameOrderByWithRelationInput | WallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallOfFames.
     */
    cursor?: WallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallOfFames.
     */
    distinct?: WallOfFameScalarFieldEnum | WallOfFameScalarFieldEnum[]
  }

  /**
   * WallOfFame findFirstOrThrow
   */
  export type WallOfFameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter, which WallOfFame to fetch.
     */
    where?: WallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallOfFames to fetch.
     */
    orderBy?: WallOfFameOrderByWithRelationInput | WallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WallOfFames.
     */
    cursor?: WallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WallOfFames.
     */
    distinct?: WallOfFameScalarFieldEnum | WallOfFameScalarFieldEnum[]
  }

  /**
   * WallOfFame findMany
   */
  export type WallOfFameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter, which WallOfFames to fetch.
     */
    where?: WallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WallOfFames to fetch.
     */
    orderBy?: WallOfFameOrderByWithRelationInput | WallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WallOfFames.
     */
    cursor?: WallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WallOfFames.
     */
    skip?: number
    distinct?: WallOfFameScalarFieldEnum | WallOfFameScalarFieldEnum[]
  }

  /**
   * WallOfFame create
   */
  export type WallOfFameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * The data needed to create a WallOfFame.
     */
    data: XOR<WallOfFameCreateInput, WallOfFameUncheckedCreateInput>
  }

  /**
   * WallOfFame createMany
   */
  export type WallOfFameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WallOfFames.
     */
    data: WallOfFameCreateManyInput | WallOfFameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WallOfFame createManyAndReturn
   */
  export type WallOfFameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * The data used to create many WallOfFames.
     */
    data: WallOfFameCreateManyInput | WallOfFameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WallOfFame update
   */
  export type WallOfFameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * The data needed to update a WallOfFame.
     */
    data: XOR<WallOfFameUpdateInput, WallOfFameUncheckedUpdateInput>
    /**
     * Choose, which WallOfFame to update.
     */
    where: WallOfFameWhereUniqueInput
  }

  /**
   * WallOfFame updateMany
   */
  export type WallOfFameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WallOfFames.
     */
    data: XOR<WallOfFameUpdateManyMutationInput, WallOfFameUncheckedUpdateManyInput>
    /**
     * Filter which WallOfFames to update
     */
    where?: WallOfFameWhereInput
    /**
     * Limit how many WallOfFames to update.
     */
    limit?: number
  }

  /**
   * WallOfFame updateManyAndReturn
   */
  export type WallOfFameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * The data used to update WallOfFames.
     */
    data: XOR<WallOfFameUpdateManyMutationInput, WallOfFameUncheckedUpdateManyInput>
    /**
     * Filter which WallOfFames to update
     */
    where?: WallOfFameWhereInput
    /**
     * Limit how many WallOfFames to update.
     */
    limit?: number
  }

  /**
   * WallOfFame upsert
   */
  export type WallOfFameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * The filter to search for the WallOfFame to update in case it exists.
     */
    where: WallOfFameWhereUniqueInput
    /**
     * In case the WallOfFame found by the `where` argument doesn't exist, create a new WallOfFame with this data.
     */
    create: XOR<WallOfFameCreateInput, WallOfFameUncheckedCreateInput>
    /**
     * In case the WallOfFame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WallOfFameUpdateInput, WallOfFameUncheckedUpdateInput>
  }

  /**
   * WallOfFame delete
   */
  export type WallOfFameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
    /**
     * Filter which WallOfFame to delete.
     */
    where: WallOfFameWhereUniqueInput
  }

  /**
   * WallOfFame deleteMany
   */
  export type WallOfFameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WallOfFames to delete
     */
    where?: WallOfFameWhereInput
    /**
     * Limit how many WallOfFames to delete.
     */
    limit?: number
  }

  /**
   * WallOfFame without action
   */
  export type WallOfFameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallOfFame
     */
    select?: WallOfFameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WallOfFame
     */
    omit?: WallOfFameOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    numero: 'numero',
    password: 'password',
    username: 'username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MotsScalarFieldEnum: {
    id: 'id',
    word: 'word',
    longueur: 'longueur',
    difficulty: 'difficulty'
  };

  export type MotsScalarFieldEnum = (typeof MotsScalarFieldEnum)[keyof typeof MotsScalarFieldEnum]


  export const WallOfFameScalarFieldEnum: {
    id: 'id',
    scores: 'scores',
    login: 'login'
  };

  export type WallOfFameScalarFieldEnum = (typeof WallOfFameScalarFieldEnum)[keyof typeof WallOfFameScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    numero?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    numero?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    numero?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    numero?: SortOrder
    password?: SortOrder
    username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    numero?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
  }

  export type MotsWhereInput = {
    AND?: MotsWhereInput | MotsWhereInput[]
    OR?: MotsWhereInput[]
    NOT?: MotsWhereInput | MotsWhereInput[]
    id?: IntFilter<"Mots"> | number
    word?: StringFilter<"Mots"> | string
    longueur?: IntFilter<"Mots"> | number
    difficulty?: StringFilter<"Mots"> | string
  }

  export type MotsOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    longueur?: SortOrder
    difficulty?: SortOrder
  }

  export type MotsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    word?: string
    AND?: MotsWhereInput | MotsWhereInput[]
    OR?: MotsWhereInput[]
    NOT?: MotsWhereInput | MotsWhereInput[]
    longueur?: IntFilter<"Mots"> | number
    difficulty?: StringFilter<"Mots"> | string
  }, "id" | "word">

  export type MotsOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    longueur?: SortOrder
    difficulty?: SortOrder
    _count?: MotsCountOrderByAggregateInput
    _avg?: MotsAvgOrderByAggregateInput
    _max?: MotsMaxOrderByAggregateInput
    _min?: MotsMinOrderByAggregateInput
    _sum?: MotsSumOrderByAggregateInput
  }

  export type MotsScalarWhereWithAggregatesInput = {
    AND?: MotsScalarWhereWithAggregatesInput | MotsScalarWhereWithAggregatesInput[]
    OR?: MotsScalarWhereWithAggregatesInput[]
    NOT?: MotsScalarWhereWithAggregatesInput | MotsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mots"> | number
    word?: StringWithAggregatesFilter<"Mots"> | string
    longueur?: IntWithAggregatesFilter<"Mots"> | number
    difficulty?: StringWithAggregatesFilter<"Mots"> | string
  }

  export type WallOfFameWhereInput = {
    AND?: WallOfFameWhereInput | WallOfFameWhereInput[]
    OR?: WallOfFameWhereInput[]
    NOT?: WallOfFameWhereInput | WallOfFameWhereInput[]
    id?: IntFilter<"WallOfFame"> | number
    scores?: IntFilter<"WallOfFame"> | number
    login?: StringFilter<"WallOfFame"> | string
  }

  export type WallOfFameOrderByWithRelationInput = {
    id?: SortOrder
    scores?: SortOrder
    login?: SortOrder
  }

  export type WallOfFameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    AND?: WallOfFameWhereInput | WallOfFameWhereInput[]
    OR?: WallOfFameWhereInput[]
    NOT?: WallOfFameWhereInput | WallOfFameWhereInput[]
    scores?: IntFilter<"WallOfFame"> | number
  }, "id" | "login">

  export type WallOfFameOrderByWithAggregationInput = {
    id?: SortOrder
    scores?: SortOrder
    login?: SortOrder
    _count?: WallOfFameCountOrderByAggregateInput
    _avg?: WallOfFameAvgOrderByAggregateInput
    _max?: WallOfFameMaxOrderByAggregateInput
    _min?: WallOfFameMinOrderByAggregateInput
    _sum?: WallOfFameSumOrderByAggregateInput
  }

  export type WallOfFameScalarWhereWithAggregatesInput = {
    AND?: WallOfFameScalarWhereWithAggregatesInput | WallOfFameScalarWhereWithAggregatesInput[]
    OR?: WallOfFameScalarWhereWithAggregatesInput[]
    NOT?: WallOfFameScalarWhereWithAggregatesInput | WallOfFameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WallOfFame"> | number
    scores?: IntWithAggregatesFilter<"WallOfFame"> | number
    login?: StringWithAggregatesFilter<"WallOfFame"> | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    numero: number
    password: string
    username: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    numero: number
    password: string
    username: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    numero: number
    password: string
    username: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type MotsCreateInput = {
    word: string
    longueur: number
    difficulty: string
  }

  export type MotsUncheckedCreateInput = {
    id?: number
    word: string
    longueur: number
    difficulty: string
  }

  export type MotsUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    longueur?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type MotsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    longueur?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type MotsCreateManyInput = {
    id?: number
    word: string
    longueur: number
    difficulty: string
  }

  export type MotsUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    longueur?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type MotsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    longueur?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type WallOfFameCreateInput = {
    scores: number
    login: string
  }

  export type WallOfFameUncheckedCreateInput = {
    id?: number
    scores: number
    login: string
  }

  export type WallOfFameUpdateInput = {
    scores?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
  }

  export type WallOfFameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scores?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
  }

  export type WallOfFameCreateManyInput = {
    id?: number
    scores: number
    login: string
  }

  export type WallOfFameUpdateManyMutationInput = {
    scores?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
  }

  export type WallOfFameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scores?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    numero?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    numero?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    numero?: SortOrder
    password?: SortOrder
    username?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MotsCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    longueur?: SortOrder
    difficulty?: SortOrder
  }

  export type MotsAvgOrderByAggregateInput = {
    id?: SortOrder
    longueur?: SortOrder
  }

  export type MotsMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    longueur?: SortOrder
    difficulty?: SortOrder
  }

  export type MotsMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    longueur?: SortOrder
    difficulty?: SortOrder
  }

  export type MotsSumOrderByAggregateInput = {
    id?: SortOrder
    longueur?: SortOrder
  }

  export type WallOfFameCountOrderByAggregateInput = {
    id?: SortOrder
    scores?: SortOrder
    login?: SortOrder
  }

  export type WallOfFameAvgOrderByAggregateInput = {
    id?: SortOrder
    scores?: SortOrder
  }

  export type WallOfFameMaxOrderByAggregateInput = {
    id?: SortOrder
    scores?: SortOrder
    login?: SortOrder
  }

  export type WallOfFameMinOrderByAggregateInput = {
    id?: SortOrder
    scores?: SortOrder
    login?: SortOrder
  }

  export type WallOfFameSumOrderByAggregateInput = {
    id?: SortOrder
    scores?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}