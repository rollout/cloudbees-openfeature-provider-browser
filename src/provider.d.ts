import { EvaluationContext, Provider, ResolutionDetails } from '@openfeature/nodejs-sdk';
import { RoxSetupOptions } from 'rox-node';
/**
 * The CloudBees Provider will use CloudBees Feature Management to evaluate flags.
 *
 * Use <code>OpenFeature.setProvider(await CloudbeesProvider.build(APP_KEY))</code> to register the provider.
 */
export declare class CloudbeesProvider implements Provider {
    static build(appKey: string, options?: RoxSetupOptions): Promise<CloudbeesProvider>;
    private constructor();
    readonly metadata: {
        readonly name: "CloudBees Feature Management Provider";
    };
    resolveBooleanEvaluation(flagKey: string, defaultValue: boolean, context: EvaluationContext): Promise<ResolutionDetails<boolean>>;
    resolveStringEvaluation(flagKey: string, defaultValue: string, context: EvaluationContext): Promise<ResolutionDetails<string>>;
    resolveNumberEvaluation(flagKey: string, defaultValue: number, context: EvaluationContext): Promise<ResolutionDetails<number>>;
    resolveObjectEvaluation<T extends object>(flagKey: string, defaultValue: T, context: EvaluationContext): Promise<ResolutionDetails<T>>;
}
