/* auto-generated by NAPI-RS */
/* eslint-disable */

export function getTargetTriple(): string

export function initCustomTraceSubscriber(traceOutFilePath?: string | undefined | null): void

export function minify(code: Buffer, opts: Buffer, signal?: AbortSignal | undefined | null): Promise<TransformOutput>

export function minifySync(code: Buffer, opts: Buffer): TransformOutput

export interface TransformOutput {
  code: string
  map?: string
}

/** Hack for `Type Generation` */
export interface TransformOutput {
  code: string
  map?: string
}
